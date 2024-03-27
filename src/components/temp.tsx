const deadline = "14:38";
// const deadline = "11:00 AM";
let interval: any;
// const intervalRef = useRef(null);

const deadlineInHours = 48;

// useEffect(() => {

//   const getTime = () => {
//     const now = new Date();
//     const deadline = new Date(now.getTime() + deadlineInHours * 60 * 60 * 1000);

//     const timeLeft = deadline - now;

//     if (timeLeft <= 0) {
//       setCountdownFinished(true);
//       return;
//     }

//     const remainingHours = Math.floor(timeLeft / (1000 * 60 * 60));
//     const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     setHours(remainingHours);
//     setMinutes(remainingMinutes);
//     setSeconds(remainingSeconds);
//   };

//   const interval = setInterval(getTime, 1000);

//   return () => clearInterval(interval);
// }, []);

//   useEffect(() => {
//   const getTime = () => {
//     let interval: any;
//     const time = Date.parse(deadline) - Date.now();

//     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//     setMinutes(Math.floor((time / 1000 / 60) % 60));
//     setSeconds(Math.floor((time / 1000) % 60));

//     if (time <= 0) {
//       setCountdownFinished(true);
//       clearInterval(interval);
//       return;
//     }
//   };

//   // useEffect(() => {
//   //   const interval = setInterval(() => getTime(deadline), 1000);

//   //   return () => clearInterval(interval);
//   // }, []);

// // useEffect line was here
//     getTime(); // Call getTime initially to set the state immediately
//     const interval = setInterval(getTime, 1000); // Call getTime inside setInterval

//     return () => clearInterval(interval);
//   }, []);






// second code below
// const deadline = "14:38";
// let interval: any;

// useEffect(() => {
//   const getTime = () => {
//     const now = new Date();
//     const deadlineParts = deadline.split(":");
//     const deadlineHours = parseInt(deadlineParts[0]);
//     const deadlineMinutes = parseInt(deadlineParts[1]);

//     let hours = deadlineHours - now.getHours();
//     let minutes = deadlineMinutes - now.getMinutes();
//     let seconds = 59 - now.getSeconds();

//     if (seconds < 0) {
//       seconds += 60;
//       minutes--;
//     }
//     if (minutes < 0) {
//       minutes += 60;
//       hours--;
//     }
//     if (hours < 0) {
//       hours += 24; // Assuming the deadline is for the next day
//     }

//     setHours(hours);
//     setMinutes(minutes);
//     setSeconds(seconds);

//     if (hours <= 0 && minutes <= 0 && seconds <= 0) {
//       setCountdownFinished(true);
//       clearInterval(interval);
//       return;
//     }
//   };
//   const interval = setInterval(getTime, 1000);
//   return () => clearInterval(interval);
// }, [interval]);









useEffect(() => {
    const getTime = () => {
      let interval: any;
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
  
      if (time <= 0) {
        setCountdownFinished(true);
        clearInterval(interval);
        return;
      }
    };
  
    // useEffect(() => {
    //   const interval = setInterval(() => getTime(deadline), 1000);
  
    //   return () => clearInterval(interval);
    // }, []);
  
  // useEffect line was here
      getTime(); // Call getTime initially to set the state immediately
      const interval = setInterval(getTime, 1000); // Call getTime inside setInterval
  
      return () => clearInterval(interval);
    }, []);