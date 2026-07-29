import os
import sqlite3
from contextlib import contextmanager

DATABASE_PATH = os.getenv("DATABASE_PATH", "feilao.db")


def init_db() -> None:
    conn = sqlite3.connect(DATABASE_PATH)
    try:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS print_queue (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                order_id INTEGER,
                content TEXT NOT NULL,
                status TEXT DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)
        conn.commit()
    finally:
        conn.close()


@contextmanager
def get_db():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()
