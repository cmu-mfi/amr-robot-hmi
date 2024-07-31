# AMR Interactive User Interface

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
Next start up the front end:
Navigate to the `frontend` folder in the `user_interface` package:
```
~/your-workspace/src/user_interface/frontend
```
Run the program:
```
npm start
```
