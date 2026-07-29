from fastapi import APIRouter
from pydantic import BaseModel

from app.db import get_db

router = APIRouter(tags=["print-queue"])


class PrintOrderIn(BaseModel):
    content: str = "TEST ORDER"
    order_id: int | None = None


@router.post("/print-queue")
def create_print_order(order: PrintOrderIn) -> dict[str, int | str]:
    with get_db() as conn:
        cursor = conn.execute(
            "INSERT INTO print_queue (order_id, content, status) VALUES (?, ?, 'pending')",
            (order.order_id, order.content),
        )
        conn.commit()
        return {"id": cursor.lastrowid, "status": "pending"}


@router.get("/print-queue")
def list_print_orders() -> list[dict]:
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM print_queue ORDER BY id").fetchall()
        return [dict(row) for row in rows]


@router.delete("/print-queue")
def clear_print_orders() -> dict[str, str]:
    with get_db() as conn:
        conn.execute("DELETE FROM print_queue")
        conn.commit()
        return {"status": "cleared"}
