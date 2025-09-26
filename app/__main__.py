# This allows running the worker with: python -m app.worker
from app.worker import main
import asyncio

if __name__ == "__main__":
    asyncio.run(main())
