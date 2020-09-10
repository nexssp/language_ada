with Ada.Text_IO;
procedure Default is
    begin
      loop
        exit when Ada.Text_IO.End_Of_File;

        -- Ada.Text_IO.Put_Line("Echo" &Ada.Text_IO.Get_Line);
        Ada.Text_IO.Put_Line(Ada.Text_IO.Get_Line);
      end loop;
end default;