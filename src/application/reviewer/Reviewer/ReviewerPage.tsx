/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Search, Calendar, MessageSquare, Check, X, CheckCircle, XCircle } from 'lucide-react';
import styles from './ReviewerPage.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import ButtonBar from '../../../components/ButtonBar/ButtonBar';

interface Task {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  title: string;
  description: string;
  photoEvidence: string;
  completionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Toast {
  id: string;
  type: 'success' | 'error';
  message: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      user: {
        name: 'Emily Chen',
        email: 'emily.chen@email.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      title: 'Planted Native Trees',
      description: 'Planted 5 native oak trees in the local community park to help restore the natural ecosystem and provide habitat for local wildlife.',
      photoEvidence: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      completionDate: '2024-01-15',
      status: 'pending'
    },
    {
      id: '2',
      user: {
        name: 'Marcus Rodriguez',
        email: 'marcus.r@email.com',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      title: 'Beach Cleanup Drive',
      description: 'Organized and led a community beach cleanup, collecting over 50 pounds of plastic waste and debris from a 2-mile stretch of coastline.',
      photoEvidence: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      completionDate: '2024-01-12',
      status: 'pending'
    },
    {
      id: '3',
      user: {
        name: 'Sarah Thompson',
        email: 'sarah.thompson@email.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      title: 'Solar Panel Installation',
      description: 'Installed a 6kW solar panel system on my home, reducing carbon footprint by an estimated 8,000 pounds of CO2 annually.',
      photoEvidence: 'https://images.pexels.com/photos/9875463/pexels-photo-9875463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      completionDate: '2024-01-10',
      status: 'pending'
    },
    {
      id: '4',
      user: {
        name: 'David Park',
        email: 'david.park@email.com',
        avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      title: 'Community Garden Project',
      description: 'Created a community vegetable garden that provides fresh produce to 20 local families and reduces their grocery footprint.',
      photoEvidence: 'https://images.pexels.com/photos/1459460/pexels-photo-1459460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      completionDate: '2024-01-08',
      status: 'pending'
    },
    {
      id: '5',
      user: {
        name: 'Luna Martinez',
        email: 'luna.martinez@email.com',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      title: 'Electric Vehicle Conversion',
      description: 'Successfully converted my old car to electric, eliminating approximately 4.6 tons of CO2 emissions per year.',
      photoEvidence: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      completionDate: '2024-01-05',
      status: 'pending'
    }
  ]);
  
  const [comments, setComments] = useState<Record<string, string>>({});

  const addToast = (type: 'success' | 'error', message: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const handleApprove = (taskId: string, taskTitle: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    addToast('success', `Task "${taskTitle}" approved successfully!`);
    setComments(prev => {
      const { [taskId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const handleReject = (taskId: string, taskTitle: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    addToast('error', `Task "${taskTitle}" rejected.`);
    setComments(prev => {
      const { [taskId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const filteredTasks = tasks.filter(task => 
    task.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
     <div className={styles.page}>
        <Navbar />
      {/* Toast Container */}
      <div className={styles.toastContainer}>
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`${styles.toast} ${toast.type === 'success' ? styles.toastSuccess : styles.toastError}`}
          >
            {toast.type === 'success' ? <CheckCircle className={styles.toastIcon} /> : <XCircle className={styles.toastIcon} />}
            <span className={styles.toastMessage}>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Review Submitted Tasks</h1>
          <p className={styles.subtitle}>Review eco-actions completed by the community.</p>

          {/* Search Bar */}
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by username or task name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Task Cards */}
        <div className={styles.taskList}>
          {filteredTasks.length === 0 ? (
            <div className={styles.noTasks}>
              <div className={styles.noTasksText}>
                {searchTerm ? 'No tasks found matching your search.' : 'No tasks to review at this time.'}
              </div>
            </div>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className={styles.taskCard}>
                {/* User Info Row */}
                <div className={styles.userRow}>
                  <img src={task.user.avatar} alt={task.user.name} className={styles.avatar} />
                  <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{task.user.name}</h3>
                    <p className={styles.userEmail}>{task.user.email}</p>
                  </div>
                  <div className={styles.taskDate}>
                    <Calendar className={styles.calendarIcon} />
                    <span className={styles.taskDateText}>Completed {formatDate(task.completionDate)}</span>
                  </div>
                </div>

                {/* Task Details */}
                <div className={styles.taskDetails}>
                  <h4 className={styles.taskTitle}>{task.title}</h4>
                  <p className={styles.taskDescription}>{task.description}</p>
                </div>

                {/* Evidence Photo */}
                <div className={styles.photoWrapper}>
                  <img src={task.photoEvidence} alt="Task evidence" className={styles.photo} />
                </div>

                {/* Review Controls */}
                <div className={styles.reviewControls}>
                  {/* Comment Input */}
                  <div className={styles.commentWrapper}>
                    <MessageSquare className={styles.commentIcon} />
                    <textarea
                      placeholder="Add a comment (optional)..."
                      value={comments[task.id] || ''}
                      onChange={(e) =>
                        setComments(prev => ({
                          ...prev,
                          [task.id]: e.target.value
                        }))
                      }
                      className={styles.commentInput}
                      rows={3}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <button onClick={() => handleReject(task.id, task.title)} className={styles.rejectButton}>
                      <X className={styles.buttonIcon} /> Reject
                    </button>
                    <button onClick={() => handleApprove(task.id, task.title)} className={styles.approveButton}>
                      <Check className={styles.buttonIcon} /> Approve
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ButtonBar />
    </div>
  );
}

export default App;