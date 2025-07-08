import React from 'react'

export const GridNoticias = (id_post, user) => {
    return (
        <>
            <section>
                <div className='card-container'>
                    {
                        /* llamar a la api y crear una card por cada resultado */

                        data.map((imagen) => {
                            /* CARD */
                            <Card key={imagen} imagen={imagen} />

                        })


                    }

                </div>
            </section>

        </>
    )
}
