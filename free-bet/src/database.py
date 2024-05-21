import sqlite3

conn = sqlite3.connect('database.db')
cur = conn.cursor()

def usersInit():
  cur.execute("""
    CREATE TABLE users (
      username text,
      email text,
      password text
  )""")

  conn.commit()
  conn.close()

def addUser(email, username, password):
  user = (email, username, password)
  cur.execute("INSERT INTO users VALUES (?,?,?)", user)

def matchesInit():
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
  conn.close()

def addMatch(id, p1, p2, p1_odds, p2_odds, time):
  match = (id, p1, p2, p1_odds, p2_odds, time)
  cur.execute("INSERT OR REPLACE INTO matches VALUES (?,?,?,?,?,?)", match)
  conn.commit()

def getMatches():
  returnObj = {'matches': []}
  for row in cur.execute("SELECT * from matches order by time"):
    returnObj['matches'].append({'matchId': row[0], row[1]: row[3], row[2]: row[4], 'time': row[5]})
  return returnObj