DROP TABLE IF EXISTS matches;

CREATE TABLE matches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  send_id INTEGER NOT NULL,
  receive_id INTEGER NOT NULL,
  when_to_send TEXT NOT NULL,
  sender_peer_id TEXT,
  receiver_peer_id TEXT,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);