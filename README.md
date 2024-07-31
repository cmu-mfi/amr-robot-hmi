# AMR Interactive User Interface

## Overview 

This is an Interactive User Interface for the AMRs. Integration between the front end, back end, and ROS2 is complete however not all buttons and components are fully functional. Currently, only `go and charge` and `undock and arm` are fully functional. 

## Installation 

```
$ git clone https://github.com/cmu-mfi/amr-robot-hmi.git
$ cd ../
$ colcon build --symlink-install
```

### Compile main package
```
colcon build --symlink-install --packages-select user_interface
```

### Use
First start up the backend:
Navigate to the folder in the package housing the backend:
```
~/your-workspace/src/user_interface/user_interface
```
Run the program:
```
python app.py
```
Upon start-up of the front end, a message like the one below should be displayed:
```
[INFO] [1722441774.491329364] [ros2_handler]: ROS2 node started
Starting Flask server...
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5001
 * Running on http://172.26.190.49:5001
Press CTRL+C to quit
 * Restarting with stat
[INFO] [1722441775.196222249] [ros2_handler]: ROS2 node started
Starting Flask server...
 * Debugger is active!
 * Debugger PIN: 828-144-138
```

Next start up the front end:
Navigate to the `frontend` folder in the `user_interface` package:
```
~/your-workspace/src/user_interface/frontend
```
Run the program:
```
npm start
```
Upon start-up of the front end, a message like the one below should be displayed:
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.26.190.49:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
You can access the UI using either of the URLs provided upon start-up depending on if the program is local or on a different device using the same network.

### Visualization of the UI
Below is a visualization of how the UI will look. 

<img width="500" alt="Screenshot 2024-07-31 at 12 09 02 PM" src="https://github.com/user-attachments/assets/46ecf11d-bfbe-4d97-ad7c-c91cdf2cf3d8">
<img width="500" alt="Screenshot 2024-07-31 at 12 09 27 PM" src="https://github.com/user-attachments/assets/828b82d6-0d85-43c5-ba85-af816917d7f7">




