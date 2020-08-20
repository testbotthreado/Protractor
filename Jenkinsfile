pipeline{
    agent{
        node "master"
    }

    stages{
        stage("Install protractor"){
            steps{
                sh 'npm install'
            }
        }
        stage("Clone the Repo"){
            steps{
                git 'git@github.com:ganeshhubale/jaspro.git'
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
            echo 'Ganesh is saying Hello!'

            mail bcc: '', body: "Project: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}  URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Status: Project name -> ${env.JOB_NAME}", to: "${DEFAULT_RECIPIENTS}";
        }
    }
}