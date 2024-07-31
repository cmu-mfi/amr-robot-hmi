from flask import Flask, jsonify
import numpy as np
from flask_cors import CORS
import time
import threading
import rclpy
from ros2handler import ROS2Handler 

# Initialize the Flask app and allow Cross-Origin Resource Sharing (CORS)
app = Flask(__name__)
CORS(app)

# Initialize ROS2 and create an instance of the ROS2Handler class
rclpy.init(args=None)
ros2_handler = ROS2Handler()

# Function to continuously spin the ROS2 node in a separate thread
def ros2_spin():
    rclpy.spin(ros2_handler)

# Start the ROS2 spinning in a daemon thread
ros2_thread = threading.Thread(target=ros2_spin, daemon=True)
ros2_thread.start()

# Define a route to handle 'go_and_charge' requests
@app.route('/go_and_charge', methods=['POST'])
def go_and_charge():
    print("go and charge executed")
    result = ros2_handler.send_go_and_charge_request()
    return jsonify({"status": "Go and Charge executed", "result": str(result)})

# Define a route to handle 'undock_and_arm' requests
@app.route('/undock_and_arm', methods=['POST'])
def undock_and_arm():
    result = ros2_handler.send_undock_and_arm_request()
    return jsonify({"status": "Undock and Arm executed"})

# Define routes to handle various robot navigation requests
@app.route('/go_to_robot_a', methods=['POST'])
def go_to_robot_a():
    print("Going to Robot A")
    return jsonify({"status": "Going to Robot A"})

@app.route('/go_to_robot_b', methods=['POST'])
def go_to_robot_b():
    print("Going to Robot B")
    return jsonify({"status": "Going to Robot B"})

@app.route('/go_to_robot_c', methods=['POST'])
def go_to_robot_c():
    print("Going to Robot C")
    return jsonify({"status": "Going to Robot C"})

@app.route('/go_to_robot_d', methods=['POST'])
def go_to_robot_d():
    print("Going to Robot D")
    return jsonify({"status": "Going to Robot D"})

@app.route('/go_to_loading', methods=['POST'])
def go_to_loading():
    print("Going to Loading")
    return jsonify({"status": "Going to Loading"})

@app.route('/go_to_depot', methods=['POST'])
def go_to_depot():
    print("Going to Depot")
    return jsonify({"status": "Going to Depot"})

# Start the Flask server and listen on all network interfaces on port 5001
if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, port=5001, host='0.0.0.0')
