function logarTempoDeExecucao(){
    return function(
        target: any,
        propretyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: Array<any>){
            const tempoInicio = performance.now()
            const retorno = metodoOriginal.apply(this,args)
            const tempoFinal = performance.now()
            console.log(`${propretyKey}, Tempo de execução : ${(tempoFinal - tempoInicio) / 1000 }`)
            retorno
        }   

        return descriptor
    }
}

export { logarTempoDeExecucao }