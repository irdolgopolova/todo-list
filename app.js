Vue.createApp({
    data() {
        return {
            valueInput: '',
            needDoList: [],
            completeList: [],
        };
    },
    computed: {
        needDoListLength() {
            return this.needDoList.length
        },
        completeListLength() {
            return this.completeList.length
        }
    },
    methods: {
        handleInput (event) {
            this.valueInput = event.target.value
        },
        resetValueInput() {
            this.valueInput = ''
        },
        addTask(event) {
            event.preventDefault()

            this.needDoList.push({
                id: this.needDoList.length + 1,
                title: this.valueInput
            })

            this.resetValueInput()
        },
        doCheck(index, type) {
            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1)

                this.completeList.push(...completeMask)
            }
            else {
                const noCompleteMask = this.completeList.splice(index, 1)

                this.needDoList.push(...noCompleteMask)
            }
        },
        removeMask(index, type) {
            const toDoList = type === 'need'
                ? this.needDoList
                : this.completeList

            toDoList.splice(index, 1)
        }
    }
}).mount('#app');