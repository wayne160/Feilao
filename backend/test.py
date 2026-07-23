import win32print

def print_raw(printer_name, data):
    hPrinter = win32print.OpenPrinter(printer_name)
    try:
        hJob = win32print.StartDocPrinter(hPrinter, 1, ("Order", None, "RAW"))
        try:
            win32print.StartPagePrinter(hPrinter)
            win32print.WritePrinter(hPrinter, data)
            win32print.EndPagePrinter(hPrinter)
        finally:
            win32print.EndDocPrinter(hPrinter)
    finally:
        win32print.ClosePrinter(hPrinter)

data = b"\x1b\x40"        # initialize printer
data += b"TEST ORDER\n"   # text
data += b"\x1d\x56\x00"  # cut paper

print_raw("Generic", data)