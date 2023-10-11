import time

# Start the count from 200
count = 200

while count >= 1:  # Exit the loop when count reaches 1
    print(count)
    count -= 1
    time.sleep(1)  # Sleep for 2 seconds before printing the next number
