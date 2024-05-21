import requests
from fastapi import FastAPI
from bs4 import BeautifulSoup
import json
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from database import addMatch, matchesInit, getMatches

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
)

def scrape():
  r = requests.get('https://www.sportsbet.com.au/betting/australian-rules/afl')
  soup = BeautifulSoup(r.content, 'html.parser') 

  s = soup.find_all('div', class_='card_fohmrj3')  

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
    addMatch(id, p1, p2, p1_odds, p2_odds, time)


@app.get('/odds')
async def getTeamOdds():
  return getMatches()