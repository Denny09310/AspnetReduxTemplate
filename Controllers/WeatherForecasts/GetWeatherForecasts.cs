namespace MyReduxTemplate.Controllers.WeatherForecasts;

public class GetWeatherForecasts : EndpointWithoutRequest
{
    private readonly ApplicationDbContext _context;

    public GetWeatherForecasts(ApplicationDbContext context)
    {
        _context = context;
    }

    public override void Configure()
    {
        Get("/weatherforecasts");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var forecasts = await _context.WeatherForecasts.ToArrayAsync();
        await SendAsync(forecasts);
    }
}