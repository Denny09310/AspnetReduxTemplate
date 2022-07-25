
global using FastEndpoints;
global using Microsoft.EntityFrameworkCore;
global using MyReduxTemplate.Data;
using FastEndpoints.Swagger;
using MyReduxTemplate;

var builder = WebApplication.CreateBuilder(args);

// Get the conncection string
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add Database References
builder.Services.AddSqlite<ApplicationDbContext>(connectionString);

// Add services to the container.
builder.Services.AddFastEndpoints();
builder.Services.AddSwaggerDoc(shortSchemaNames: true);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    app.UseDeveloperExceptionPage();
    app.ApplyDevelopmentMigrations();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();
app.UseFastEndpoints(c =>
{
    c.RoutingOptions = o => o.Prefix = "api";
    c.ShortEndpointNames = true;
});

app.UseSwaggerUi3(s => s.ConfigureDefaults());
app.UseOpenApi();

app.MapFallbackToFile("index.html");

app.Run();
