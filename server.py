import requests
from fastapi import FastAPI
from bs4 import BeautifulSoup
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
)

@app.get('/')
async def getTeamOdds():
  r = requests.get('https://www.sportsbet.com.au/betting/australian-rules/afl')
  soup = BeautifulSoup(r.content, 'html.parser') 

  s = soup.find_all('div', class_='multiMarketCouponContainer_f234ak7')

  participants = []
  odds = []

  for element in s:
    for x in element.find_all('div', class_='participantText_fivg86r'):
      participants.append(x.contents[0])

  s = soup.find_all('div', class_='market-coupon-col-0 gridColumn_frfjtr6')

  for element in s:
    for x in element.find_all('span', class_='size14_f7opyze bold_f1au7gae priceTextSize_frw9zm9'):
      odds.append(x.contents[0])

  returnObj = {'matches': []}
  for i, p in enumerate(participants):
    if (i % 2 == 0):
      returnObj['matches'].append({p: odds[i], participants[i + 1]: odds[i + 1]})

  return returnObj
