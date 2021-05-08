#### *sesh-thunderball-log
---
## App log

**INPUTS**
 - Log message
   - message          string


**OUTPUTS**
 - (none)


*PROPOSED*
  - log levels


***PROCESS***

  - process file ✔
    - get current log file ✔
    - format log file name as per config "log_file_name_format" etc ✔
    - get todays date ✔
    - format today's date as per config "log_file_name_format" etc ✔
    - compare them ✔
      - if they match, leave the filename alone ✔
      - if they don't match ✔
        - generate new file name as per config "log_file_name_format" etc ✔
        - change the current log file name ✔

    - get current log file directory
    - if it doesn't exist, create it
    - if current file name doesn't exist in that dir, create it
      
  - process message
    - call log with message
    - get prefix and append to message
  - write to log
    - open file and lock it
    - write message to log file
    - unlock file and close it