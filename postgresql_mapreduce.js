CREATE TABLE airline_flights (
	Year varchar(255),
	Month varchar(255),
	DayofMonth varchar(255),
	DayOfWeek varchar(255),
	DepTime varchar(255),
	CRSDepTime varchar(255),
	ArrTime varchar(255),
	CRSArrTime varchar(255),
	UniqueCarrier varchar(255),
	FlightNum varchar(255),
	TailNum varchar(255),
	ActualElapsedTime varchar(255),
	CRSElapsedTime varchar(255),
	AirTime varchar(255),
	ArrDelay varchar(255),
	DepDelay varchar(255),
	Origin varchar(255),
	Dest varchar(255),
	Distance varchar(255),
	TaxiIn varchar(255),
	TaxiOut varchar(255),
	Cancelled varchar(255),
	CancellationCode varchar(255),
	Diverted varchar(255),
	CarrierDelay varchar(255),
	WeatherDelay varchar(255),
	NASDelay varchar(255),
	SecurityDela varchar(255),
	LateAircraftDelay varchar(255)
);

\timing

COPY airline_flights FROM '/Users/bonlemuel/Documents/THESIS/MASTERS/REPOSITORY/sql-benchmarking/2007.csv' DELIMITER ',' CSV;

/* POSTGRESQL */
with delayed_flights as (
    SELECT UniqueCarrier, ArrDelay, Year
    FROM airline_flights
    WHERE ArrDelay != 'NA'
)
SELECT UniqueCarrier AS carrier, SUM(CAST(ArrDelay as INTEGER)) OVER (PARTITION BY UniqueCarrier) AS Delay, *
FROM delayed_flights;
