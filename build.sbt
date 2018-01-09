import scala.sys.process.Process

name := """todo app"""
organization := "com.linkebon"

version := "1.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice

lazy val buildFrontends = taskKey[Unit]("Build frontends")

buildFrontends := {
  todoAppFrontend.value
}

lazy val todoAppFrontend = taskKey[Unit]("generate todoApp")
todoAppFrontend := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/react-redux-todo-app"
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}