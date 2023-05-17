REPOSITORY=/home/ubuntu/ec2-user/app
LOG_PATH=$REPOSITORY/logs
mkdir -p $LOG_PATH
touch $LOG_PATH/app.log
touch $LOG_PATH/error.log

APP_NAME=issue_tracker
JAR_NAME=$(ls $REPOSITORY/ | grep '.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/$JAR_NAME

CURRENT_PID=$(pgrep -f $APP_NAME)

if [ -z $CURRENT_PID ]
then
  echo "> No running application instance, thus not terminating."
else
  echo "> kill -15 $CURRENT_PID"
  sudo kill -15 $CURRENT_PID
  sleep 5
fi

echo "> Deploy $JAR_PATH"
nohup java -jar /home/ec2-user/app/build/libs/issue_tracker-0.0.1.jar --spring.config.location=/home/ec2-user/application.yml > $LOG_PATH/app.log 2> $LOG_PATH/error.log < /dev/null & 
