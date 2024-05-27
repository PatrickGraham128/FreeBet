import requests
from fastapi import FastAPI
from bs4 import BeautifulSoup
import json
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from database import addMatch, matchesInit, getMatches, getDisposals

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
)

@app.get('/odds')
async def getTeamOdds():
  return getMatches()

@app.get('/disposals/')
async def getDisposalOdds(id: int):
  return getDisposals()

@app.get('/goals/')
async def getGoalOdds(id: int):
  return getGoals()