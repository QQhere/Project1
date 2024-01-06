/*
So sánh chênh lệch giá điện theo đề xuất mới của EVN
Description
Hiện tại giá điện đang được tính theo bậc thang gồm 6 mức (mức điều chỉnh từ 04/05/2023), với giá thấp nhất (bậc 1) là 1.728VND và giá bậc cao nhất là 3.015 VND. Tuy nhiên EVN đang đề xuất một cách tính giá điện bậc thang mới chỉ gồm 5 mức như hinh dưới, giá thấp nhất (bậc 1) khoảng 1.728 đồng một kWh và cao nhất (bậc 5) là 3.457 đồng một kWh. 

Bậc	Biểu giá hiện hành	Phương án 5 bậc
  	Mức sử dụng	Giá (*)	Mức sử dụng	Giá
1	0-50 kWh	1.728	0-100 kWh	1.728
2	51-100 kWh	1.786	101-200 kWh	2.074
3	101-200 kWh	2.074	201-400 kWh	2.612
4	201-300 kWh	2.612	401-700 kWh	3.111
5	301-400 kWh	2.919	701 kWh trở lên	3.457
6  	401 kWh trở lên	3.015		
(*) Giá chưa bao gồm thuế VAT

Hãy xây dựng chương trình nhập vào số kwh điện của một hộ tiêu thụ và so sánh xem theo bảng giá mới đang lấy ý kiến thì tiền điện tiêu thụ của hộ đó sẽ tăng thêm hay giảm đi bao nhiêu.

INPUT: là số kwh điện tiêu thụ của hộ (là số nguyên)
OUTPUT: là chênh lệch giữa giá theo đề xuất và giá theo mô hình bậc thang 6 mức đang được áp dụng.

VAT sẽ được lấy là 10%, và kết quả in ra sẽ lấy tới 2 chữ số thập phân

EXAMPLE 
INPUT
540
OUTPUT
-22176.00


INPUT
70
OUTPUT
-1276.00
*/

function electricityPrices(kwh) {
    if (kwh < 0) return null;
    let current_cost = 0;
    const current_price = [1728, 1786, 2074, 2612, 2919, 3015];
    const current_level = [50, 50, 100, 100, 100]
    const current_amount = []
    for (let i = 0; i < current_level.length; i++) {
        current_amount[i] = current_level[i] * current_price[i];
    }
    if (kwh > 400) {
        current_cost = current_amount[4] + current_amount[3] + current_amount[2] + current_amount[1] + current_amount[0] + current_price[5]*(kwh - 400);
    } else if (kwh > 300) {
        current_cost = current_amount[3] + current_amount[2] + current_amount[1] + current_amount[0] + current_price[4]*(kwh - 300);
    } else if (kwh > 200) {
        current_cost = current_amount[2] + current_amount[1] + current_amount[0] + current_price[3]*(kwh - 200);
    } else if (kwh > 100) {
        current_cost = current_amount[1] + current_amount[0] + current_price[2]*(kwh - 100);
    } else if (kwh > 50) {
        current_cost = current_amount[0] + current_price[1]*(kwh - 50);
    } else {
        current_cost = current_price[0]*kwh;
    }
    
    let suggested_cost = 0;
    const suggested_price = [1728, 2074, 2612, 3111, 3457];
    const suggested_level = [100, 100, 200, 300]
    const suggested_amount = []
    for (let i = 0; i < suggested_level.length; i++) {
        suggested_amount[i] = suggested_level[i] * suggested_price[i];
    }
    if (kwh > 700) {
        suggested_cost = suggested_amount[3] + suggested_amount[2] + suggested_amount[1] + suggested_amount[0] + suggested_price[4]*(kwh - 700);
    } else if (kwh > 400) {
        suggested_cost = suggested_amount[2] + suggested_amount[1] + suggested_amount[0] + suggested_price[3]*(kwh - 400);
    } else if (kwh > 200) {
        suggested_cost = suggested_amount[1] + suggested_amount[0] + suggested_price[2]*(kwh - 200);
    } else if (kwh > 100) {
        suggested_cost = suggested_amount[0] + suggested_price[1]*(kwh - 100);
    } else {
        suggested_cost = suggested_price[0]*kwh;
    }

    let diff = 1.1 * (suggested_cost - current_cost);
    return diff.toFixed(2);
}
