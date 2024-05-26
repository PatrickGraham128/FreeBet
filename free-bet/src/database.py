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

def getMatches():
  returnObj = {'matches': []}
  for row in cur.execute("SELECT * from matches order by time"):
    returnObj['matches'].append({'matchId': row[0], row[1]: row[3], row[2]: row[4], 'time': row[5]})
  return returnObj

def disposalsInit():
  cur.execute("""
    DROP TABLE IF EXISTS disposals
  """)
  cur.execute("""
    CREATE TABLE disposals (
      mid INTEGER NOT NULL,
      player,
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

def getDisposals():
  returnObj = []
  for row in cur.execute("""
      SELECT * from disposals
      order by over_40, 
      over_35, over_30,
      over_25, over_20,
      over_15
    """):
    returnObj.append(row)
  return returnObj