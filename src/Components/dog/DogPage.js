import React, { useEffect, useState } from 'react';
import DogTile from './DogTile';
import './dogPage.css';
import ImageLoader from '../shared/ImageLoader';
import globalconst from '../../Common/constants';

function DogPage() {
    const [dogsList, setDogsList] = useState([]);
    const [dogsFilters, setDogsFilters] = useState({});
    const [filteredDogs, setFilteredDogs] = useState([]);

    const getDogs = () => {
        let totalRecords = dogsList.concat([
            { iden: 1, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard', coat: 'nocoat', displayPrice: 15000, sellingPrice: 12000, weight: 0 },
            { iden: 2, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 },
            { iden: 3, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard', coat: 'long', displayPrice: 14000, sellingPrice: 12000, weight: 0 },
            { iden: 4, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 },
            { iden: 5, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard2', coat: 'short', displayPrice: 11000, sellingPrice: 12000, weight: 0 },
            { iden: 6, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 },
            { iden: 7, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard', coat: 'long', displayPrice: 15000, sellingPrice: 12000, weight: 0 },
            { iden: 8, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 },
            { iden: 9, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard4', coat: 'long', displayPrice: 20000, sellingPrice: 12000, weight: 0 },
            { iden: 10, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 },
            { iden: 11, imgpath: 'https://tiimg.tistatic.com/fp/1/005/572/cute-german-shepherd-puppy-492.jpg', breed: 'German Shephard', coat: 'long', displayPrice: 15000, sellingPrice: 12000, weight: 0 },
            { iden: 12, imgpath: 'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2liZXJpYW4lMjBodXNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', breed: 'Siberian Husky', coat: 'short', displayPrice: 16000, sellingPrice: 13000, weight: 0 }
        ]);
        setDogsList(totalRecords);

        let filter = { breeds: [], coats: [], price: { minprice: undefined, maxprice: undefined } };
        totalRecords.map(item => {
            if (filter.breeds.indexOf(item.breed) === -1)
                filter.breeds.push(item.breed);
            if (filter.coats.indexOf(item.coat) === -1)
                filter.coats.push(item.coat);
            if (!filter.price.minprice || filter.price.minprice > item.sellingPrice)
                filter.price.minprice = item.sellingPrice;
            if (!filter.price.maxprice || filter.price.maxprice < item.sellingPrice)
                filter.price.maxprice = item.sellingPrice;
            return item;
        });
        setDogsFilters(filter);
        setFilteredDogs(totalRecords);
    };

    const ApplyFilters = (filterValues) => {
        let breedApplicable = filterValues.breeds && filterValues.breeds.length > 0;
        let coatApplicable = filterValues.coats && filterValues.coats.length > 0;

        let dataToBeDisplayed = dogsList.filter(item =>
            (!breedApplicable || filterValues.breeds.indexOf(item.breed) > -1) &&
            (!coatApplicable || filterValues.coats.indexOf(item.coat) > -1) &&
            (item.sellingPrice >= filterValues.price.minprice && item.sellingPrice <= filterValues.price.maxprice)
        );
        setFilteredDogs(dataToBeDisplayed);
    }

    const HasRecords = () => {
        return filteredDogs && filteredDogs.length > 0;
    }

    useEffect(() => {
        if (dogsList.length === 0)
            getDogs();
        //UpdateFilter
    }, [dogsList, dogsFilters, filteredDogs, getDogs]);

    return (
        <div className="container">
            <div className="filter">
                Fill Filter
                <button onClick={() => ApplyFilters({ breeds: ['German Shephard2'], coats: [], price: { minprice: 12000, maxprice: 13000 } })}> Apply</button>
            </div>
            <div className="list">
                {
                    HasRecords() ?
                        filteredDogs.map((item) => <DogTile key={item.iden} {...item}></DogTile>) :
                        <ImageLoader iden='errornodata' src={globalconst.loadingImgPath} />
                }
            </div>
        </div>
    );
}

export default DogPage;