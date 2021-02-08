<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid
			:tasks="tasks"
			@taskDeleted="deleteTask"
			@taskStateChanged="toogleTaskState" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'
import TasksProgress from './components/TasksProgress'

export default {
	components: { TaskGrid, NewTask, TasksProgress },
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			//monitorando profundamente, todo tipo de mudança que houver no array, nao só adicao e exclusao
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			//verificando se já existe alguma task com o mesmo nome da nova adicionada
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length === 0

			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		toogleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		//pegando dados do localstorage para usar quando a app por reiniciada
		const tasksLocalStorage = localStorage.getItem('tasks')
		const arrayTasks = JSON.parse(tasksLocalStorage)

		if (Array.isArray(arrayTasks)) {
			this.tasks = arrayTasks			
		} else {
			this.tasks = []
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
