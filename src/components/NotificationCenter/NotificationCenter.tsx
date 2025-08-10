import { useState } from "react";
import "./NotificationCenter.css";
import { Bell } from "lucide-react";
import clsx from "clsx";

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Coldplay new song",
      description: "You have a new comment on your post",
      time: "5 min ago",
      read: false,
    },

    {
      id: 2,
      title: "Payment received!",
      description: "Your subscription has been renewed!",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Friend Request",
      description: "Ana Silva sent you a request",
      time: "1 day ago",
      read: false,
    },
  ]);

  function toggleCenter() {
    setIsOpen((prev) => !prev);
  }

  function markAsRead(id: number) {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  }

  return (
    <div className="notification-center">
      <button onClick={toggleCenter}>
        <Bell size={20} />
      </button>

      {isOpen && (
        <div className="notification-panel">
          {notifications.length > 0 && (
            <div>
              <button
                className="clear-button"
                onClick={() => setNotifications([])}
              >
                Clear All
              </button>
            </div>
          )}

          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={clsx("notification-item", {
                  read: notification.read,
                })}
                onClick={() => markAsRead(notification.id)}
              >
                <strong className="notification-title">
                  {notification.title}
                </strong>
                <p className="notification-description">
                  {notification.description}
                </p>
                <span className="notification-time">{notification.time}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
