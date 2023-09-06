import { useState } from 'react';

const SelectDog = ({ breeds, isSelect, setIsSelect }) => {
    const [valBreed, setValBreed] = useState('');
    const [api, setApi] = useState('');
    
    const url = {
        select: `https://dog.ceo/api/breed/${valBreed}/images/random`
    }

   const selectHandler = async () => {
        const src = await getSelectDog(url.select)
        setApi(src)
      }

    return (
        <div className='select-block'>
             <label className='label'>
                Select breed
    
                <input className='select' onChange={(e) => setIsSelect(!isSelect)} 
                checked={ isSelect }
                type="checkbox" />

            </label>
            
            {
                isSelect && 
                <select onChange={(e) => setValBreed(e.target.value)}>
                    {
                    breeds.map(el => {return <option className='option' key={ el }value={ el }>{ el }</option>})
                    }
                </select>
            }

            <button className='select-btn' onClick={() => selectHandler()}>Show select dog</button>
            
            <div className='dog-select-img'>
                <img src={ api } alt="" />
            </div>
        </div>
    );
};

async function getSelectDog(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data.message;
}

export default SelectDog;