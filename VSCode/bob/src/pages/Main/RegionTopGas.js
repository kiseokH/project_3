import React from "react";

const RegionTopGas = () => {
    const gasStations = [
        { region: "천안시", name: "미소주유소", price: 1550 },
        { region: "천안시", name: "천안주유소", price: 1550 },
        { region: "천안시", name: "샤인더주유소", price: 1555 },
        { region: "천안시", name: "행복주유소", price: 1555 },
        { region: "천안시", name: "쌍용주유소", price: 1555 },
    ];

    return (
        <div>
            <h2>우리지역 Top5 주유소</h2>
            <select>
                <option>천안시</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>지역</th>
                        <th>주유소명</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {gasStations.map((station, index) => (
                        <tr key={index}>
                            <td>{station.region}</td>
                            <td>{station.name}</td>
                            <td>{station.price}원</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegionTopGas;
