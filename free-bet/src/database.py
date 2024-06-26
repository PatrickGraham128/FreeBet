import sqlite3

conn = sqlite3.connect('database.db')
cur = conn.cursor()

def usersInit():
  cur.execute("""
    DROP TABLE IF EXISTS users
  """)
  cur.execute("""
    DROP TABLE IF EXISTS users;
    CREATE OR REPLACE TABLE users (
      username text,
      email text,
      password text
  )""")

  conn.commit()

def addUser(email, username, password):
  user = (email, username, password)
  cur.execute("INSERT INTO users VALUES (?,?,?)", user)

def matchesInit():
  cur.execute("""
    DROP TABLE IF EXISTS matches
  """)
  cur.execute("""
    CREATE TABLE matches (
      mid INTEGER NOT NULL PRIMARY KEY,
      p1,
      p2,
      p1_odds,
      p2_odds,
      time
  )""")

  conn.commit()

def addMatch(id, p1, p2, p1_odds, p2_odds, time):
  match = (id, p1, p2, p1_odds, p2_odds, time)
  cur.execute("INSERT OR REPLACE INTO matches VALUES (?,?,?,?,?,?)", match)
  conn.commit()

def getMatches(time):
  returnObj = {'matches': []}
  for row in cur.execute("SELECT * from matches where time > ? order by time", (time, )):
    returnObj['matches'].append({'matchId': row[0], row[1]: row[3], row[2]: row[4], 'time': row[5]})
  print(time)
  print([x['time'] for x in returnObj['matches']])
  return returnObj

def disposalsInit():
  cur.execute("""
    DROP TABLE IF EXISTS disposals
  """)
  cur.execute("""
    CREATE TABLE disposals (
      mid INTEGER NOT NULL,
      player PRIMARY KEY,
      over_15,
      over_20,
      over_25,
      over_30,
      over_35,
      over_40
  )""")

  conn.commit()

def addDisposals(id, player, over_15, over_20, over_25, over_30, over_35, over_40):
  disposals = (id, player, over_15, over_20, over_25, over_30, over_35, over_40)
  cur.execute("INSERT OR REPLACE INTO disposals VALUES (?,?,?,?,?,?,?,?)", disposals)
  conn.commit()

def getDisposals(id):
  returnObj = []
  for row in cur.execute("""
      SELECT * from disposals
      WHERE mid = ?
      order by over_40, 
      over_35, over_30,
      over_25, over_20,
      over_15
    """, (id,)):
    returnObj.append(row)
  return returnObj

def goalsInit():
  cur.execute("""
    DROP TABLE IF EXISTS goals
  """)
  cur.execute("""
    CREATE TABLE goals (
      mid INTEGER NOT NULL,
      player PRIMARY KEY,
      over_1,
      over_2,
      over_3,
      over_4,
      over_5,
      over_6
  )""")

  conn.commit()

def addGoals(id, player, over_1, over_2, over_3, over_4, over_5, over_6):
  goals = (id, player, over_1, over_2, over_3, over_4, over_5, over_6)
  cur.execute("INSERT OR REPLACE INTO goals VALUES (?,?,?,?,?,?,?,?)", goals)
  conn.commit()

def getGoals(id):
  returnObj = []
  for row in cur.execute("""
      SELECT * from goals
      WHERE mid = ?
      order by over_6, 
      over_5, over_4,
      over_3, over_2,
      over_1
    """, (id,)):
    returnObj.append(row)
  return returnObj