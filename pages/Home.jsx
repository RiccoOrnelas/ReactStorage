import NavBar from "../components/nav"
import Box from "../components/box"
import '../src/App.css'
import '../src/db.json'
import { useEffect, useState } from "react"

export default function Home() {
    const [TotalInvent, setTotalInvent] = useState(0)
    const [diversidadeItens, setdiversidadeItens] = useState(0)
    const [itensRecentes, setitensRecentes] = useState(0)
    const [itensAcabando, setitensAcabando] = useState([])



    useEffect(() => {
        fetch('../src/db.json').
            then(response => response.json()).then(dados => {
                const total = dados.map(obj => parseInt(obj.Quantidade))
                const soma = total.reduce((acumulator, number) => { return acumulator + number }, 0)
                setTotalInvent(soma)
                const tipos = dados.map(obj => obj.Tipo)
                const totaltipos = new Set(tipos)
                setdiversidadeItens(totaltipos.size)
                const acabando = dados.filter(data => {
                    if (data.Quantidade < 10 && data.Quantidade > 0) {

                        return true
                    } else {
                        return false

                    }

                })
                setitensAcabando(acabando)


            })

    })
    return (
        <div style={{ padding: '10px' }}>
            <header>
                <NavBar />
            </header>
            <h1 className="dash">DASHBOARD</h1> <br />
            <section className="views">

                <div style={{ display: 'flex', flexDirection: "column", width: '90vdw' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                        <Box name='Diversidade de Itens' quant={diversidadeItens} />
                        <Box name='Inventário Total' quant={TotalInvent} />
                    </div>
                    <table>
                        <td>Itens Recentes
                            <tr>das</tr>
                        </td>
                        <td>Ações
                            <tr><button>Ver</button></tr>
                        </td>
                    </table>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90vdw' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                        <Box name='Itens Recentes' quant={itensRecentes} />
                        <Box name='Itens Acabando' quant={itensAcabando} />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Itens Acabando</th>
                                <th>Quantidade</th>
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itensAcabando.map(iten => {
                                return (
                                    <tr key={iten.id}>
                                        <td>{iten.Nome}</td>
                                        <td>{iten.Quantidade}</td>
                                        <td><button>ver</button></td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>




                </div>
            </section>
        </div>
    )
}