pipeline{
    agent{
        node "master"
    }

    stages{
        stage("Install protractor"){
            steps{
                sh 'npm install'
                sh 'npm install protractor-beautiful-reporter --save-dev'
            }
        }

        stage("Clone the Repo"){
            steps{
                git 'git@github.com:ganeshhubale/jaspro.git'
                sh 'pip install miqsel --user'
                sh 'miqsel start'
            }
        }
        stage("Run Test"){
            steps{
                sh "protractor config.js"
            }
        }
    }

    post {
        always {
            echo 'Jenkins is saying Hello! Please have patience!!!'

            mail bcc: '', body: "Project: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}  URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Jenkins is saying Hello! Please have patience!!!", to: 'ganeshhubale03@redhat.com';
        }
    }
}