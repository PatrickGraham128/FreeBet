import requests
from fastapi import FastAPI
from bs4 import BeautifulSoup
import json
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from database import addMatch, matchesInit, getMatches, getDisposals, getGoals

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
)

@app.get('/odds/')
async def getTeamOdds(time: str):
  return getMatches(time)

@app.get('/disposals/')
async def getDisposalOdds(id: int):
  return getDisposals(id)

@app.get('/goals/')
async def getGoalOdds(id: int):
  return getGoals(id)