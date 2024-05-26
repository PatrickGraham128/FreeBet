from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from database import addDisposals, getDisposals, disposalsInit

service = Service('./chromedriver')
mid = 8250389
disposalsInit()

opts = ChromeOptions()
# setting window size ensures that necessary data is visible
opts.add_argument("--window-size=900,700")
driver = webdriver.Chrome(service=service, options=opts)

driver.get('https://www.sportsbet.com.au/betting/australian-rules/afl/fremantle-v-collingwood-8250389')
disposals = driver.find_element(By.CSS_SELECTOR, "button[data-automation-id='disposals-tab']")
disposals.click()
time.sleep(1)

cards = driver.find_elements(By.CSS_SELECTOR, "div[data-automation-id^='player-row']")
for card in cards[::2]:
  odds = [float(x.text) for x in card.find_elements(By.CSS_SELECTOR, "span[data-automation-id='price-text']")]
  try:
    card.find_element(By.CSS_SELECTOR, "div[class='incrementContainer_fdtz7hq']").find_element(By.CSS_SELECTOR, "div[class='naPriceButton_fnyy064']")
    [odds.insert(0, "NULL") for x in card.find_elements(By.CSS_SELECTOR, "div[class='naPriceButton_fnyy064']")]
  except:
    try:
      [odds.append("NULL") for x in card.find_elements(By.CSS_SELECTOR, "div[class='naPriceButton_fnyy064']")]
    except:
      pass
  player = card.find_element(By.CSS_SELECTOR, "span[class='SF_PRO_BLD_14_16_fyiaz5 TextInteractiveStrongDefault_fbo4f0y']").text
  addDisposals(mid, player, odds[0], odds[1], odds[2], odds[3], odds[4], odds[5])

getDisposals()
driver.quit()
