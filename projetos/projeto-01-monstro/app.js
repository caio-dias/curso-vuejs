new Vue({
    el: '#app',
    data: {
        //jogo esta rodando ou nao
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            //verifica se o jogo ja tem resultado final (um dos dois ganhou)
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            //zerando data para novo jogo
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            //params = lutador, dano minimo e maximo e se é especial, quem atacou, alvo do ataque, e classe css
            //monstro sofre menos danos que o jogador
            //apenas o monstro sofre ataque epecial
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0) {
                //evitar de ficar as duas vidas em 0%
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(figther, min, max, especial, source, target, style) {
            //se for ataque especial, adiciona 5 de dano
            const plus = especial ? 5 : 0

            //calcula o ataque e devolve o dano
            const hurt = this.getRandom(min + plus, max + plus)

            //se a diferença entre a vida do jogador e o dano for negativo, será sempre 0
            //acessando o jogador ou monstro pelo indice de objeto []
            this[figther] = Math.max(this[figther] - hurt, 0)

            //alimentando os logs
            this.registerLog(`${source} atingiu ${target} com ${hurt} de dano.`, style)
        },
        getRandom(min, max) {
            //pega numero randomico para dano de ataque
            const value = Math.random() * (max - min) + min

            //arredonda o valor
            return Math.round(value);
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)

            //o maximo que a vida do player pode chegar é 100
            this.playerLife = Math.min(this.playerLife + heal, 100)

            //alimentando log
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        healAndHurt() {
            //quando o player cura, ele tambem é atacado
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        registerLog(text, style) {
            //mostrando sempre o mais recente
            this.logs.unshift({text, style})
        }
    },
    watch: {
        //observando quando hasResult = true, running = false
        hasResult(value) {
            if (value) {
                this.running = false
            }
        }
    }
})