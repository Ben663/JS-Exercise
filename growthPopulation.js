/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly 
increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the 
town. How many years does the town need to see its population greater or equal to p = 1200 
inhabitants
*/
function nb_years(p0, percent, arguments, p) {
    let year = 0;
    for (; p0 < p; year++) {
        p0 += p0 * (percent / 100) + arguments;
    }
    return year;
}
console.log(nb_years(1500, 5, 100, 5000)); // return 15
console.log(nb_years(1500000, 2.5, 10000, 2000000)); // return 10