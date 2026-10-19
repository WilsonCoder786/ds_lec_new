namespace DsuLab01;

/// <summary>
/// Lab 01 entry point — call one demo at a time from Main while learning.
/// </summary>
public static class Program
{
    /// <summary>Application entry point.</summary>
    /// <param name="args">Command-line arguments (unused).</param>
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, C#!");
        Console.WriteLine("Welcome to Data Structures Lab (CS-2007L)");
        Console.WriteLine($"Running on .NET {Environment.Version}");

        // Uncomment one at a time during the lab:
        // DebugDemo.Run();
        // TypesDemo.Run();
        // RecordFileDemo.Run();
        // ArrayOperationsDemo.Run();
        // TradeoffDemo.Run();
    }
}
