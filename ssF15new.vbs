'Dim title = "MsgBox Demonstration"
Dim WshShell
Set WshShell = WScript.CreateObject("WScript.Shell")

Do While True
	If Hour(Now()) < (12+7-1) Then
		WshShell.SendKeys("{F15}")
	End If
	WScript.Sleep(150000)
Loop