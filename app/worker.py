import asyncio
import logging
from app.services.scheduler import SchedulerService

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def main():
    """Main worker process"""
    scheduler = SchedulerService()
    
    try:
        scheduler.start()
        logger.info("Worker started")
        
        # Keep running
        while True:
            await asyncio.sleep(60)
            
    except KeyboardInterrupt:
        logger.info("Worker shutting down...")
        scheduler.stop()
    except Exception as e:
        logger.error(f"Worker error: {e}")
        scheduler.stop()

if __name__ == "__main__":
    asyncio.run(main())
