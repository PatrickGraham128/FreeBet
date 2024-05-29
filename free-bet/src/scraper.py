import requests
from fastapi import FastAPI
from bs4 import BeautifulSoup
from datetime import datetime
import json
from database import addMatch, addDisposals, getDisposals, disposalsInit, addGoals
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

def scrapeh2h():
  r = requests.get('https://www.sportsbet.com.au/betting/australian-rules/afl')
  soup = BeautifulSoup(r.content, 'html.parser') 

  s = soup.find_all('div', class_='card_fohmrj3')
  matches = []

  for card in s:
    id = card['data-automation-id'].split('-')[0]
    participants = card.find_all('div', class_='participantText_fivg86r')
    p1 = participants[0].contents[0]
    p2 = participants[1].contents[0]
    odds = card.find_all('span', class_='size14_f7opyze bold_f1au7gae priceTextSize_frw9zm9')
    p1_odds = odds[0].contents[0]
    p2_odds = odds[1].contents[0]
    time = card.find('span', class_='size11_fwt0xu4 Nevada_fxjpoyk oneLine_f15ay66x').contents[0]
    time = datetime.strptime(time.split(', ')[1] + ' 2024', '%d %b %H:%M %Y')
    matches.append((id, p1, p2, p1_odds, p2_odds, time))
    addMatch(id, p1, p2, p1_odds, p2_odds, time)
  return matches

def scrapeDisposals(id, team1, team2):
  service = Service('./chromedriver')
  opts = ChromeOptions()
  # setting window size ensures that necessary data is visible
  opts.add_argument("--window-size=900,700")
  driver = webdriver.Chrome(service=service, options=opts)

  driver.get(f'https://www.sportsbet.com.au/betting/australian-rules/afl/{team1}-{team2}-{id}')
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
    addDisposals(id, player, odds[0], odds[1], odds[2], odds[3], odds[4], odds[5])

  goals = driver.find_element(By.CSS_SELECTOR, "button[data-automation-id='goals-tab']")
  goals.click()
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
    addGoals(id, player, odds[0], odds[1], odds[2], odds[3], odds[4], odds[5])
  driver.quit()

for match in scrapeh2h():
  scrapeDisposals(match[0], match[1].lower(), match[2].lower())