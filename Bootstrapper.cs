namespace MyReduxTemplate;

internal static class Bootstrapper
{
    public static void ApplyDevelopmentMigrations(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;
        var dbContext = services.GetRequiredService<ApplicationDbContext>();
        dbContext.Database.Migrate();
    }
}