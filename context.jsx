import React, { createContext, useState } from 'react'
import { movies } from '../Mock/data'
import { Filter } from './Filter'
import { SecondContext } from './SecondData'
import { TestContext } from './Test'


export const MainContext = createContext()

export const Context = ({ children }) => {
    const [state, setState] = useState(movies)
    return (
        <MainContext.Provider value={[state, setState]}>
            <Filter>
                <TestContext>
                    <SecondContext>
                        {children}

                    </SecondContext>
                </TestContext>
            </Filter>
        </MainContext.Provider>
    )
}
