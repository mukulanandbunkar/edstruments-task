const dataServices = {
  fetchTaskList(user) {
    let response = null;
    const taskData = localStorage.getItem("task-data");
    if (taskData) {
      response = JSON.parse(taskData);
    }
    return (response && response[user]) || false;
  },
  updateTaskList(user, list) {
    let response = {};
    const taskData = localStorage.getItem("task-data");
    if (taskData) {
      response = JSON.parse(taskData);
    }
    const payload = {
      ...response,
      [user]: [...list],
    };
    const strigifyPayload = JSON.stringify(payload);
    localStorage.setItem("task-data", strigifyPayload);
  },
};

export default dataServices;
