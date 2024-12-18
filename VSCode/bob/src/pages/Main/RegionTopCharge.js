import React from "react";

const RegionTopCharge = () => {
    const chargeStations = [
        { region: "천안시", name: "천안시청 3충전소", score: 4.83 },
        { region: "천안시", name: "천안시청 2충전소", score: 4.68 },
        { region: "천안시", name: "샤인더 충전소", score: 4.45 },
        { region: "천안시", name: "행복충전소", score: 4.41 },
        { region: "천안시", name: "천안역 충전소", score: 4.31 },
    ];

    return (
        <div>
            <h2>우리지역 Top5 충전소</h2>
            <select>
                <option>천안시</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>지역</th>
                        <th>충전소명</th>
                        <th>평점</th>
                    </tr>
                </thead>
                <tbody>
                    {chargeStations.map((station, index) => (
                        <tr key={index}>
                            <td>{station.region}</td>
                            <td>{station.name}</td>
                            <td>{station.score}점</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegionTopCharge;
