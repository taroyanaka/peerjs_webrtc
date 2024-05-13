DROP TABLE IF EXISTS skill_likes;

-- skillsに対してlikeをインクリメントするためのテーブル
CREATE TABLE skill_likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  skill_id INTEGER NOT NULL,
  like_volume INTEGER NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);
