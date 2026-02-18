using TodoApp.Models;

namespace TodoApp.Services
{
    public interface ITodoService
    {
        Task<List<TodoItem>> GetAllAsync();
        Task<TodoItem> AddAsync(TodoItem item);
        Task<bool> DeleteAsync(int id);
    }
}
