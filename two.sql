DROP TABLE IF EXISTS matches;

CREATE TABLE matches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  match_data TEXT NOT NULL,
  send_id INTEGER NOT NULL,
  receive_id INTEGER NOT NULL,
  when_to_send TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);