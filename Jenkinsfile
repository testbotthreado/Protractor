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
}