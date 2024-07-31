import rclpy
from rclpy.node import Node
from std_srvs.srv import Empty

# ROS2Handler class that extends the ROS2 Node class
class ROS2Handler(Node):
    def __init__(self):
        super().__init__('ros2_handler')
        # Create clients for the '/robot1/go_and_dock' and '/robot1/undock_and_arm' services
        self.go_and_dock_client = self.create_client(Empty, '/robot1/go_and_dock')
        self.undock_and_arm_client = self.create_client(Empty, '/robot1/undock_and_arm')
        self.get_logger().info('ROS2 node started')

    # Method to send a request to the 'go_and_dock' service
    def send_go_and_charge_request(self):
        request = Empty.Request()
        self.future = self.go_and_dock_client.call_async(request)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()
    
    # Method to send a request to the 'undock_and_arm' service
    def send_undock_and_arm_request(self):
        request = Empty.Request()
        self.future = self.undock_and_arm_client.call_async(request)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()

# Main function to initialize the ROS2 node
def main(args=None):
    rclpy.init(args=args)
    node = ROS2Handler()

# Entry point of the script
if __name__ == '__main__':
    main()
