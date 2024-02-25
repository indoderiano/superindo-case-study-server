
module.exports={
    getTimeStamp: () => {
      // 'YYYY-MM-DD hh:mm:ss.mmm'
      let date_service = new Date();

      let year = date_service.getFullYear();
      let month = date_service.getMonth();
      let date = date_service.getDate();
      let hour = date_service.getHours();
      let minute = date_service.getMinutes();
      let second = date_service.getSeconds();
      let millsecond = date_service.getMilliseconds();

      let timestamp = `${year}-${month}-${date} ${hour}:${minute}:${second}.${millsecond}`;

      return timestamp

    }

}