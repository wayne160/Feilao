# from escpos.printer import Win32Raw
# from fastapi import APIRouter
# import win32print

# router = APIRouter(tags=["print"])

# PRINTER_NAME = "Generic"  # must match the name in Windows > Printers & scanners

# @router.get("/print")
# def print_test() -> dict[str, str]:
#     data = b"\x1b\x40"        # initialize printer
#     data += b"TEST ORDER\n"   # text
#     data += b"TEST ORDER\n"
#     data += b"TEST ORDER\n"
#     data += b"TEST ORDER\n"
#     data += b"TEST ORDER\n"
#     data += b"TEST ORDER\n"
#     data += b"\x1d\x56\x00"
#     hPrinter = win32print.OpenPrinter('Generic')
#     try:
#         hJob = win32print.StartDocPrinter(hPrinter, 1, ("Order", None, "RAW"))
#         try:
#             win32print.StartPagePrinter(hPrinter)
#             win32print.WritePrinter(hPrinter, data)

#             win32print.EndPagePrinter(hPrinter)
#         finally:
#             win32print.EndDocPrinter(hPrinter)
#     finally:
#         win32print.ClosePrinter(hPrinter)

#     return {"status": "ok"}

